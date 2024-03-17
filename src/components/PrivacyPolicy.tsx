import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";

import { Button } from "@/components/Button";
import { useTimelineModal } from "@/hooks/useTimelineModal";

const PrivacyPolicy = () => {
  const { removeModal } = useTimelineModal();
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <div className="h-[500px] w-[700px] overflow-scroll rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-lg font-bold">so-se-ji.com プライバシーポリシー</h2>
        <p>
          so-se-ji.com（以下、「当サイト」といいます）は、お客様の個人情報を保護するために最善の努力をいたします。本プライバシーポリシーでは、当サイトがどのような情報を収集し、その情報をどのように使用するかについて説明いたします。
        </p>
        <h3 className="mb-2 mt-4 text-lg font-bold">収集される情報</h3>
        <p>
          当サイトでは、お客様がウェブサイトを訪れた際に、ブラウザから自動的に以下の情報を収集する場合があります。
        </p>
        <ul className="ml-6 mt-2 list-disc">
          <li>IPアドレス</li>
          <li>ブラウザタイプ</li>
          <li>使用言語</li>
          <li>アクセス日時</li>
        </ul>
        <p className="mt-4">
          また、お客様が当サイトの特定の機能やサービスを利用する際には、氏名、電子メールアドレス、連絡先情報などの個人情報を収集することがあります。
        </p>
        <h3 className="mb-2 mt-4 text-lg font-bold">情報の使用</h3>
        <p>当サイトが収集した個人情報は、以下の目的で使用される場合があります。</p>
        <ul className="ml-6 mt-2 list-disc">
          <li>サービスの提供、運営、維持</li>
          <li>ユーザーサポートの提供</li>
          <li>ウェブサイトの利用状況の分析および改善</li>
          <li>法的要件や規制への対応</li>
        </ul>
        <p className="mt-4">
          当サイトは、お客様の同意なしに収集した個人情報を第三者と共有することはありません。
        </p>
        <h3 className="mb-2 mt-4 text-lg font-bold">クッキーとトラッキング技術</h3>
        <p>
          当サイトでは、クッキーや類似のトラッキング技術を使用する場合があります。これらの技術は、ユーザーのブラウザに情報を保存し、ウェブサイトの機能やパフォーマンスを向上させるために使用されます。
        </p>
        <h3 className="mb-2 mt-4 text-lg font-bold">プライバシー保護に関するお問い合わせ</h3>
        <p>
          当サイトのプライバシーポリシーに関するご質問や懸念がある場合は、以下の連絡先までお問い合わせください。
        </p>
        <ul className="ml-6 mt-2 flex list-disc items-center gap-4 text-blue">
          <FaTwitter />
          <Link
            href={"https://twitter.com/go_so_se_ji"}
            target="_blank"
            className="text-lg underline"
          >
            https://twitter.com/go_so_se_ji
          </Link>
        </ul>
        <p className="mt-4">
          本プライバシーポリシーは、変更される場合があります。変更があった場合は、当サイトに掲載される更新されたプライバシーポリシーが適用されます。
        </p>
      </div>
      <Button text="閉じる" onClick={removeModal} />
    </div>
  );
};

export default PrivacyPolicy;
