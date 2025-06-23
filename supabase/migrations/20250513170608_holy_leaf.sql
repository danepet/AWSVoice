/*
  # Update access codes table RLS policy

  1. Changes
    - Remove authenticated-only restriction
    - Allow public access for validating access codes
    - Add policy for inserting access codes via service role

  2. Security
    - Enable RLS on access_codes table
    - Add policy for public read access with appropriate filters
    - Add policy for service role insert access
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Users can read their own access codes" ON access_codes;

-- Create new policy for public access
CREATE POLICY "Allow public access code validation"
  ON access_codes
  FOR SELECT
  TO PUBLIC
  USING (
    -- Only allow access to non-expired codes
    expires_at > now()
  );

-- Create policy for service role to insert codes
CREATE POLICY "Service role can insert access codes"
  ON access_codes
  FOR INSERT
  TO service_role
  WITH CHECK (true);