"use client"; // هذا السطر يحل المشكلة فوراً$

import React from "react";
import Head from "next/head"; // لإدارة الميتا تاج
import Link from "next/link"; // Link الخاص بـ Next.js
import Accordion from "@/app/components/Accordion";
import useAccordion from "@/app/custom_hooks/useAccordion";
import H2 from "@/app/components/HtmlTools/H2";
import H2red from "@/app/components/HtmlTools/H2red";
import P from "@/app/components/HtmlTools/P";

export default function HelpCenter() {
  const { openIndex, toggle } = useAccordion();

  // بيانات الـ Schema لتعزيز SEO في جوجل
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هي اشتراكات IPTV؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تقدم لك شركة بلايستوب خدمة البث التلفزيوني عبر الانترنت IPTV، تتيح لك مشاهدة جميع القنوات العربية والاجنبية المشفرة والمفتوحة...",
        },
      },
      // يمكن إضافة بقية الأسئلة هنا بنفس النمط لظهورها في نتائج البحث
    ],
  };

  return (
    <>
      <Head>
        <title>مركز المساعدة والأسئلة الشائعة | بلايستوب IPTV</title>
        <meta
          name="description"
          content="إجابات شاملة حول اشتراكات IPTV، طرق التشغيل، الأسعار، وكيفية الحصول على تجربة مجانية من بلايستوب."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="bg-black mt-40 p-3" dir="rtl">
        <div className="text-center">
          <P >
            مرحباً بك في مركز خدمات المشتركين، اذا كنت تزور موقعنا لأول مرة
            وترغب بالاستفسار بشكل عام عن الخدمة، نود اعلامك باننا قمنا بانشاء
            قسم الاسئلة الشائعة FAQ في اسفل هذه الصفحة والذي يجيب على اكبر عدد
            ممكن من الاستفسارات الشائعة عن الخدمة
          </P>
          <div className="mt-4">
            <button className="w-30 p-2 rounded-r-3xl m-1 text-xl bg-green-500 hover:bg-green-600 transition-colors">
              <Link href="https://wa.me/212609851199?text=اريد+ طلب+ مساعده+ تقنيه." target="_blank">
                واتساب
              </Link>
            </button>
            <button className="w-30 p-2 rounded-l-3xl text-xl bg-sky-600 hover:bg-sky-700 transition-colors">
              <Link href="https://t.me/your-username" target="_blank">
                تيليجرام
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <H2>الاسئلة الشائعة FAQ</H2>
          <P>
            ننصح بالبحث عن الاجابة على استفساراتك من خلال هذه الاسئلة الاكثر
            شيوعاً قبل ان تتواصل مع بلايستوب، وذلك لمساعدتك على ايجاد اجابة
            سريعة و فورية على استفسارك متجنباً انتظار رد موظف خدمات المشتركين
          </P>

          <section>
            <H2red  >
            تفاصيل عن الاشتراكات
            </H2red>

            <Accordion
              isOpen={openIndex === 1}
              onClick={() => toggle(1)}
              title={"ما هي اشتراكات IPTV؟"}
            >
              <P>
                تقدم لك شركة بلايستوب خدمة البث التلفزيوني عبر الانترنت IPTV،
                عبر مجموعة من اشتراكات IPTV التي تتيح لك مشاهدة جميع القنوات
                العربية و الاجنبية المشفرة والمفتوحة في بث مباشر على مدار
                الساعة. بالإضافة الى مكتبة هائلة من الأفلام والمسلسلات VOD عبر
                أي جهاز تستطيع وصله بشبكة الإنترنت و من خلال اشتراك واحد فقط
                -منخفض التكلفة- لكافة أجهزتك (مثلاً الشاشة الذكيّة – الكمبيوتر –
                الهاتف الذكي- الرسيفر – التابليت او الايباد). تتيح لك اشتراكات
                PLAYSTOP الإستمتاع بجميع قنواتك التلفزيونية المفضلة حتى المشفرة
                منها ومشاهدة مباريات فريقك المفضل و أفلامك المفضلة بدون تقطيع،
                وبجودة صورة عالية جداً بواسطة مجموعة من اقوى السيرفرات العالمية
                الخاصة بالشركة والتي تضمن لك عدم انقطاع البث اطلاقاً.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 2}
              onClick={() => toggle(2)}
              title={"ماذا يمكنني ان اشاهد عبر اشتراكات IPTV؟"}
            >
              <P>يحتوي اشتراك IPTV على ثلاثة اقسام رئيسية وهي:</P>
              <br />
              <P>
                <strong>البث المباشر:</strong> تحتوي على الاف القنوات العربية
                والعالمية المشفرة والمفتوحة في بث مباشر على مدار الساعة، مثال:
                قنوات Bein Sports | YES | Netflix | Shahid VIP | OSN | SHOWTIME
                | DISNEY و الاف القنوات الاخرى المقسمة الى حزم.
              </P>
              <br />
              <P>
                <strong>مكتبة أفلام VOD:</strong> تحتوي على عدد هائل من الافلام
                العربية والاجنبية المصنفة بحسب نوع الفيلم او تاريخ الاصدار، جميع
                الافلام مترجمة للغة العربية.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 3}
              onClick={() => toggle(3)}
              title={"على كم جهاز يمكنني تشغيل اشتراك IPTV؟"}
            >
              <P>
                لا يمكن استخدام الاشتراك نفسه على عدة أجهزة في نفس الوقت. نعم،
                يمكن توصيل الاشتراك بعدة أجهزة، لكن فقط جهاز واحد يمكنه المشاهدة
                في كل مرة.
              </P>
              <P>
                نوصي دائمًا باستخدام الاشتراك على جهاز واحد فقط لضمان أفضل جودة
                واستقرار للمشاهدة!
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 4}
              onClick={() => toggle(4)}
              title={"كيف احصل على مشاهدة بث مباشر بدون تقطيع؟"}
            >
              <P>
                لمشاهدة البث المباشر بدون تقطيع، تحتاج الى جهاز ذكي بمواصفات
                Hardware جيدة (CPU و RAM قوي).
              </P>
              <br />
              <P>
                تنصح بلايستوب بسرعة تحميل (Download) لا تقل عن 5Mbps لـ SD، و
                25Mbps لـ HD، و 50Mbps لـ 4K. يفضل دائماً استخدام كيبل (LAN)
                بدلاً من الواي فاي.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 5}
              onClick={() => toggle(5)}
              title={"كيف احصل على تجربة مجانية لاشتراكات IPTV؟"}
            >
              <P>
                يمكنك زيارة صفحة الاشتراكات التجريبية المجانية، ويحق لكل مستخدم
                طلب التجربة لمرة واحدة فقط.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 6}
              onClick={() => toggle(6)}
              title={"كيف أشترك في IPTV؟"}
            >
              <P>
                <strong>الخطوة الأولى:</strong> طلب اشتراك تجريبي لمدة 12 ساعة
                عبر واتساب.
              </P>
              <br />
              <P>
                <strong>الخطوة الثانية:</strong> اختيار الحزمة المناسبة من صفحة
                الشراء، إتمام الدفع، ثم استلام بيانات الاشتراك عبر واتساب.
              </P>
            </Accordion>
          </section>

          <section className="mt-8">
            <H2red  >
          طرق التشغيل والاجهزة التي تعمل عليها الاشتراكات
            </H2red>
            <Accordion
              isOpen={openIndex === 7}
              onClick={() => toggle(7)}
              title={"ما هي الأجهزة التي تعمل عليها اشتراكات IPTV؟"}
            >
              <P>
                الشاشات الذكية، الهواتف (Android & iOS)، الكمبيوتر، Android Box،
                Apple TV، و MAG.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 8}
              onClick={() => toggle(8)}
              title={"كيف أقوم بتشغيل الاشتراك أو التجربة المجانية؟"}
            >
              <P>
                ستصلك بيانات التشغيل مع شرح مبسط. العملية سهلة ولا تتطلب خبرة،
                وفي حال واجهت صعوبة، فريقنا عبر واتساب معك خطوة بخطوة.
              </P>
            </Accordion>
          </section>

          <section className="mt-8">
            <H2red  >
               العروض و طرق الدفع
            </H2red>
            <Accordion
              isOpen={openIndex === 9}
              onClick={() => toggle(9)}
              title={"ما هي أسعار الاشتراكات وكيف يمكنني معرفة العروض؟"}
            >
              <P>
                تفضل بزيارة صفحة "شراء اشتراكات IPTV" للاطلاع على أحدث العروض
                والأسعار الحالية.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 10}
              onClick={() => toggle(10)}
              title={"ما هي طرق الدفع المتوفرة؟"}
            >
              <P>
                نوفر الدفع عبر PayPal والبطاقات البنكية (Visa/MasterCard) بأعلى
                معايير الأمان العالمية.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 11}
              onClick={() => toggle(11)}
              title={"هل يتم تجديد الاشتراك بشكل تلقائي؟"}
            >
              <P>
                لا، لا يوجد تجديد تلقائي. التجديد اختياري تماماً لضمان خصوصيتك
                وعدم سحب مبالغ دون علمك.
              </P>
            </Accordion>

            <Accordion
              isOpen={openIndex === 12}
              onClick={() => toggle(12)}
              title={"هل يمكن إلغاء الاشتراك واسترجاع المبلغ المالي؟"}
            >
              <P>
                بسبب توفير تجربة مجانية لمدة 12 ساعة قبل الشراء، لا يمكن استرجاع
                المبلغ بعد تفعيل الاشتراك المدفوع.
              </P>
            </Accordion>
          </section>
        </div>
      </div>
    </>
  );
}
