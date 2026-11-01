"use client";

export default function WhatsAppButton() {
  const phoneNumber = "27659404421";

  const message = encodeURIComponent(
    "Hello Modern Investments, I would like to enquire about your services.",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Modern Investments on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      {/* Original WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        width="36"
        height="36"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.01 3C8.84 3 3 8.83 3 16c0 2.3.6 4.56 1.75 6.55L3 29l6.62-1.73A13 13 0 0 0 16 29c7.17 0 13-5.83 13-13S23.18 3 16.01 3Zm0 23.8c-1.98 0-3.92-.53-5.62-1.53l-.4-.24-3.93 1.03 1.05-3.83-.26-.42A10.78 10.78 0 1 1 16 26.8Zm5.92-8.08c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.66-1.65-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.17-.74-1.78-1.02-2.44-.27-.64-.55-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.37c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.94-.79 2.22-1.55.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
      </svg>

      {/* Animated green pulse at top-right */}
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#25D366]" />
      </span>
    </a>
  );
}
