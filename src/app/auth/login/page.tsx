"use client";

import {
  AppleLoginButton,
  DiscordLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  XLoginButton,
} from "react-social-login-buttons";

export default function Page() {
  return (
    <div className="flex items-center justify-center px-4 bg-sky-100">
      <div className="max-w-[600px] bg-white border-1 rounded-xl p-8">
        <div className="flex flex-col items-center px-8 py-4">
          <p className="text-gray-600">
            お気に入りの方法でログインしてください
          </p>
        </div>
        <div className="flex flex-col px-8 py-4 space-y-2">
          <GoogleLoginButton text="Googleでログイン" align="center" />
          <AppleLoginButton text="Appleでログイン" align="center" />
          <XLoginButton text="Xでログイン" align="center" />
          <FacebookLoginButton text="Facebookでログイン" align="center" />
          <InstagramLoginButton text="Instagramでログイン" align="center" />
          <DiscordLoginButton text="Discordでログイン" align="center" />
          <GithubLoginButton text="GitHubでログイン" align="center" />
        </div>
        <div className="px-8 py-4">
          <p className="text-sm text-gray-500">
            ログインすることで、
            <a href="#" className="text-blue-600 hover:underline">
              利用規約
            </a>
            および
            <a href="#" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </a>
            に同意したことになります。
          </p>
        </div>
      </div>
    </div>
  );
}
