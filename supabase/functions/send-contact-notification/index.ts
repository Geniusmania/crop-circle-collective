
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.40.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY") as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const formData: ContactFormData = await req.json();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    // Store the message in the database
    const { data: contactData, error: contactError } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }])
      .select();

    if (contactError) {
      console.error("Error storing contact message:", contactError);
      throw new Error("Failed to store contact message");
    }

    // Send an email notification
    // Using Supabase's built-in email service for simplicity
    const { data: emailData, error: emailError } = await supabase.auth.admin.createUser({
      email: "pbaidoo.pb10@gmail.com",
      email_confirm: true,
      user_metadata: { 
        type: "notification", 
        subject: `New Contact Form Submission from ${name}`,
        message: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
        actionLink: `${supabaseUrl}/auth/v1/verify`,
      },
    });

    // Note: In a production environment, you'd want to use a proper email service like Resend, SendGrid, etc.

    if (emailError) {
      console.error("Error sending email notification:", emailError);
      // We'll still consider the submission successful even if the email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact message received successfully" 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An unexpected error occurred" 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
