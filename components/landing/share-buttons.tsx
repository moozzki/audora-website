"use client";

import { Link2, Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Twitter",
      icon: "/assets/twitter.svg",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/5",
    },
    {
      name: "LinkedIn",
      icon: "/assets/linkedin.svg",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/5",
    },
    {
      name: "Instagram",
      icon: "/assets/instagram.svg",
      href: `https://www.instagram.com/`, // Instagram doesnt support direct link sharing from web easily, just a brand link
      color: "hover:border-[#E4405F] hover:bg-[#E4405F]/5",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-slate-400 dark:text-slate-500 mr-2">Share</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full border border-slate-200 dark:border-slate-800 transition-all ${link.color} group`}
          title={`Share on ${link.name}`}
        >
          <Image 
            src={link.icon} 
            alt={link.name} 
            width={16} 
            height={16} 
            className="w-4 h-4 opacity-50 dark:opacity-40 group-hover:opacity-100 transition-opacity dark:invert"
          />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:bg-slate-50 dark:hover:bg-white/5"
        title="Copy Link"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
