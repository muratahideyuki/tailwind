import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
    <div className="mb-8 h-[900px]">
      <h3 className="text-7xl md:text-9xl blur-md mb-9">CONTACT</h3>
      <p className="text-center">下記フォームよりお問い合わせください</p>
      <ContactForm />
    </div>
  );
}
