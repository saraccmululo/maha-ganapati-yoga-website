// components/SendButton.tsx
"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

interface SendButtonProps {
  formId: string; // the id of the form to send
}

export default function SendButton({ formId }: SendButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent default form submission

    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) return;
    //Spam Protection:
      //Honeypot
    const honeypot = (
      form.querySelector('input[name="website"]') as HTMLInputElement
    ).value;

    if (honeypot) {
      setFeedback("Ops! Algo deu errado. Tente novamente.");
      return;
    }

      //Rate limiting
    let lastSubmit=0;
    if (Date.now() - lastSubmit < 30000) {// 30 seconds
      setFeedback("Espere 30 segundos antes de enviar outra mensagem");
      return; 
    }
    lastSubmit = Date.now(); // record the submission time

    setIsLoading(true);
    setFeedback("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setFeedback("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFeedback("Ops! Algo deu errado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="text-sm sm:text-lg inline-block bg-primary text-background px-3 py-2 md:px-6 md:py-3 rounded-full mb-2 font-semibold shadow hover:opacity-90 transition"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar mensagem"}
      </button>
      {feedback && (
        <p
          className={`mt-4 text-sm ${feedback.startsWith("M") ? "text-green-500" : "text-red-500"}`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
