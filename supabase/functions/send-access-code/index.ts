import { createClient } from "npm:@supabase/supabase-js@2.39.7";
import { Resend } from "npm:resend@2.1.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function generateAccessCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendAccessCodeEmail(email: string, code: string): Promise<void> {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: "Voice API Demos <demos@agentforcevoice.com>",
    to: email,
    subject: "Your Voice API Demos Access Code",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to Voice API Demos</h2>
        <p>Here is your access code to explore our voice demos:</p>
        <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 24px; letter-spacing: 2px; margin: 20px 0;">
          <strong>${code}</strong>
        </div>
        <p>This code will expire in 30 minutes.</p>
        <p>If you didn't request this code, please ignore this email.</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from NeuraFlash Voice API Demos. If you didn't request this code, please ignore this email.
        </p>
      </div>
    `,
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Validate email domain
    if (!email.endsWith('@neuraflash.com') && !email.endsWith('@salesforce.com')) {
      return new Response(
        JSON.stringify({ error: "Please use your Neuraflash or Salesforce email address" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    const code = generateAccessCode();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 30);

    // Insert the access code into the database
    const { error: insertError } = await supabaseClient
      .from("access_codes")
      .insert([
        {
          email,
          code,
          expires_at: expiresAt.toISOString(),
        },
      ]);

    if (insertError) {
      console.error("Error inserting access code:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create access code" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Send the access code via email
    try {
      await sendAccessCodeEmail(email, code);
      console.log(`Access code sent successfully to ${email}`);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      
      // Return a more specific error message
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email. Please check your email address and try again." 
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: "Access code has been sent to your email"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error in send-access-code function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error. Please try again later." 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});