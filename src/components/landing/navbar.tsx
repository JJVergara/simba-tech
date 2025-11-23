"use client";

import Image from "next/image";
import PillNav from "@/components/ui/pill-nav";

export function Navbar() {
  return (
    <PillNav
      logo={
        <Image
          src="/logo_cropped_white.png"
          alt="Body Cart"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
      }
      items={[
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Demos', href: '#demos' },
        { label: 'FAQ', href: '#faq' },
      ]}
      baseColor="#ffffff"
      pillColor="#000000"
      hoveredPillTextColor="#000000"
      pillTextColor="#ffffff"
      ease="power2.easeOut"
    />
  );
}
