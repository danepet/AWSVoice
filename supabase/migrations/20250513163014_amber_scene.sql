/*
  # Create access codes table

  1. New Tables
    - `access_codes`
      - `id` (uuid, primary key)
      - `email` (text)
      - `code` (text)
      - `expires_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `access_codes` table
    - Add policy for authenticated users to read their own codes
*/

CREATE TABLE IF NOT EXISTS access_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  code text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE access_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own access codes"
  ON access_codes
  FOR SELECT
  TO authenticated
  USING (email = current_user);