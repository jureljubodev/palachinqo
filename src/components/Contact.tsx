import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

type FormData = { name: string; email: string; message: string };
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export default function Contact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    // TODO: integrate with your backend or form service
    await new Promise((r) => setTimeout(r, 600));
    alert("Hvala! / Thanks!");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{t("contact.title")}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "grid", gap: 12, maxWidth: 640 }}
        >
          <input placeholder={t("contact.name")!} {...register("name")} />
          {errors.name && (
            <small style={{ color: "crimson" }}>{errors.name.message}</small>
          )}
          <input placeholder={t("contact.email")!} {...register("email")} />
          {errors.email && (
            <small style={{ color: "crimson" }}>{errors.email.message}</small>
          )}
          <textarea
            rows={5}
            placeholder={t("contact.message")!}
            {...register("message")}
          />
          {errors.message && (
            <small style={{ color: "crimson" }}>{errors.message.message}</small>
          )}
          <button className="btn" disabled={isSubmitting}>
            {t("contact.send")}
          </button>
          {isSubmitSuccessful && <small>✓ Sent</small>}
        </form>
      </div>
    </section>
  );
}
