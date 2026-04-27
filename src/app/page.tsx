// ضروري لاستخدام useAccordion
// Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

// حل مشكلة المسار: تأكد أن الملف موجود في مجلد app باسم globals.css أو قم بتسميته Style.css في نفس المجلد
import { Metadata } from "next";
import { HomeMeta } from "./data_seo/Home_seo";
import { HomeSchema } from "./data_seo/Home_seo";
import IptvForja_P from "./components/HtmlTools/IptvForja_P";
import Accordion from "./components/Accordion";

import Menu_left from "./components/MenuLeft/MenuLeft";
import Section from "./components/MenuLeft/Section";
import Menu_right from "./components/Menu_right";

import StatsSection from "./components/StatsSection";
import ArticleCard from "./components/ArticleCard";

import H1 from "./components/HtmlTools/H1";
import H2 from "./components/HtmlTools/H2";
import P from "./components/HtmlTools/P";
import DivScreen from "./components/HtmlTools/DivScreen";
import FlexBox from "./components/HtmlTools/FlexBox";
import IptvForja from "./components/HtmlTools/IptvForja";
import ButtonRed from "./components/HtmlTools/ButtonRed";
import { FilmoIcon } from "./components/heroicons/FilmoIcon";
import { TvIcon } from "./components/heroicons/TvIcon";
import { ChatIcon } from "./components/heroicons/ChatIcon";
import { MessageIcon } from "./components/heroicons/MessageIcon";

import { TagIcon } from "./components/heroicons/TagIcon";
import My_List from "./components/ChannelList/My_List";
import H2Gray from "./components/HtmlTools/H2Gray";
import PGray from "./components/HtmlTools/PGray";
{
  /** */
}
interface FAQEntity {
  name: string;
  acceptedAnswer: {
    text: string;
  };
}

// 1. إعداد الميتا داتا
export const metadata: Metadata = {
  title: HomeMeta.title,
  description: HomeMeta.description,
  keywords: HomeMeta.keywords,
  openGraph: {
    title: HomeMeta.title,
    description: HomeMeta.description,
    url: HomeMeta.url,
    images: [{ url: HomeMeta.image }],
    type: "website",
  },
};

export default function Home() {
  const faqData = (HomeSchema["@graph"][1] as { mainEntity: FAQEntity[] })
    .mainEntity;
  return (
    <main className="  relative overflow-x-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HomeSchema) }}
      />
      <DivScreen>
        <H1>{HomeMeta.title}</H1>

        <P>{HomeMeta.description}</P>

        <H2>
          مع
          
            <IptvForja  />
          
          ستحصل على قنوات رياضية مشفرة، مكتبة VOD عالمية، وتجربة مشاهدة مستقرة
          عبر سيرفر IPTV بجودة عالية وبدون مشاكل. كل ذلك عبر
          
            <IptvForja  />
          
        </H2>

        <FlexBox className="">
          <ButtonRed href="/freetrial" LinkText="جرّب قبل أن تشتركa" />
          <ButtonRed href="/Subscriptions" LinkText=" ابدا المشاهده الان" />
        </FlexBox>
      </DivScreen>
      <My_List />
      {/**<My_List /> */}
      {/* --- القسم الأول: Menu_right --- */}
          
      <Menu_right title={faqData[0]?.name}>
        <P>{faqData[0]?.acceptedAnswer?.text}</P>
        <H2>تعرف على باقات اشتراك المتوفرة في <IptvForja /></H2>
       <P>سواء كنت تريد اشتراك <IptvForja_P /> لمدة سنة أو اشتراك لمدة ستة أشهر أو ثلاث أشهر أو شهر في نفس الوقت، ستجد جميع الخيارات جاهزة للاستخدام الفوري</P>
        <H2Gray><IptvForja /> المتجر الرسمي الذي يضمن لك:</H2Gray>
        <PGray>مشاهده من أي دولة … المغرب السعودية، أوروبا، الخليج، العالم... تفعيل فوري خلال ثوانٍ بدون التزام – وبدون بيانات مصرفية للتجربة المجانية</PGray>
        <ButtonRed
          href="/Subscriptions"
          LinkText="اختر باقتك المناسبة"
        ></ButtonRed>
      </Menu_right>
      {/* --- القسم الثاني: Menu_left --- */}
      <Menu_left
        title={faqData[1]?.name}
        description={faqData[1]?.acceptedAnswer?.text}
       li_1="تغطية كاملة للدوريات الكبرى بجودات  HD وFull HD وUltra HD و2K و4K و8K ... مستقرة"
       li_2="ترتيب دقيق حسب الدولة (المغرب، الخليج، مصر) مع باقات ترفيهية"
       li_3="قنوات أوروبية وأمريكية مترجمة، بالإضافة إلى الوثائقيات العالمية."
       li_4="مكتبة أفلام (VOD) متجددة يومياً وقنوات آمنة مخصصة للأطفال."
       li_5="أكثر من 46,000 قناة حية ومكتبة أفلام ضخمة بين يديك."
       li_6="جودات متعددة تضمن استقرار البث على أي سرعة إنترنت."
       li_7="قنوات بديلة تضمن استمرار المشاهدة أثناء المباريات الكبرى."
       li_8="احصل على IPTVFORJA وابدأ المشاهدة خلال ثوانٍ معدودة."
       li_9="إضافة تلقائية لأحدث القنوات والترددات دون تدخل منك."
        buttonUrl={ <ButtonRed href="/Subscriptions" LinkText="اشترك الآن وابدأ المشاهدة"/> }
      > 
        
        <Section
          icoun={"fa-regular fa-message"}
          title={faqData[2]?.name}
          description={faqData[2]?.acceptedAnswer?.text}
        >
          <ChatIcon />
        </Section>

        <Section
          icoun={"fa-solid fa-tv"}
          title={faqData[3]?.name}
        description={faqData[3]?.acceptedAnswer?.text}
        >
          <TvIcon />
        </Section>

        <Section
          icoun={"fa-solid fa-envelope"}
          title={faqData[4]?.name}
        description={faqData[4]?.acceptedAnswer?.text}
        >
          <MessageIcon />
        </Section>

        <Section
          icoun={"fa-solid fa-tag"}
          title={"اشتراك واحد… يغنيك عن عشرات الاشتراكات"}
          description=""
        >
          <TagIcon />
        </Section>
      </Menu_left>
      {/* --- القسم الثالث: Menu_right (VOD) --- */}
      <Menu_right
        title={"مكتبة أفلام ومسلسلات VOD – أكثر من 153859 فيلم و39949 مسلسل"}
      >
        <P>✓ افلام جوده عاليه</P>
        <P>✓ مسلسلات عربية وعالمية</P>
        <P>✓ محتوى أمريكي – تركي – هندي – كوري – أنيميشن......</P>
        <P>✓ تحديث يومي للحلقات الجديدة</P>
        <P>✓ تنظيم داخل باقات تسهّل الوصول لأي محتوى</P>
        <P>كل هذا ضمن أفضل اشتراك IPTV بجودة عالية وبدون تحميل أو انتظار.</P>
        <ButtonRed
          href="/Subscriptions"
          LinkText="احصل على الوصول الكامل للمكتبة"
        />
      </Menu_right>
      {/* --- القسم الرابع: Menu_left (Free Trial) --- */}
      <Menu_left
        title={
          "اشتراك IPTV مجاني لمدة 12 ساعة – بدون تقطيع – وبدون بيانات مصرفية"
        }
        description=""
        li_1=""
       li_2=""
       li_3=""
       li_4=""
       li_5=""
       li_6=""
        li_7=""
       li_8=""
       li_9=""
        buttonUrl={
          <ButtonRed
            href="/freetrial"
            LinkText="اطلب تجربتك بدون التزام الآن"
          />
        }
      >
        {/* البطاقة الأولى */}
        <ArticleCard
          title={"اختبر الجودة قبل الشراء"}
          paragraph={
            "استمتع بجودة بث فائقة وثبات مطلق على جميع الأجهزة. ابدأ الآن بتجربة IPTV مجانية شاملة لكل المميزات، وتأكد من استقرار الخدمة في أوقات الذروة قبل الالتزام بالاشتراك الكامل."
          }
          ButtonUrl={<ButtonRed href="/freetrial" LinkText="تجربه مجانيه" />}
        >
          <TvIcon />
        </ArticleCard>

        {/* البطاقة الثانية */}
        <ArticleCard
          title={"سرعة بث وثبات لا يقارن"}
          paragraph={
            "نوفر لك أقوى السيرفرات العالمية لاكتشاف سرعة التنقل بين القنوات وتنوع المحتوى الضخم. جرّب الخدمة الآن وتعرف على الفرق في الجودة والأداء بنفسك لتشترك معنا بكل ثقة."
          }
          ButtonUrl={<ButtonRed href="/freetrial" LinkText="جرب مجانا" />}
        >
          <FilmoIcon />
        </ArticleCard>
      </Menu_left>
      <StatsSection />
      {/* --- الأسئلة الشائعة --- */}
      <div className="py-10 text-center   px-4">
        <H2>الأسئلة الشائعة حول اشتراك IPTV</H2>

        <Accordion title="كم سعر اشتراك iptv؟">
          <P>تعتمد تكلفة الاشتراك على:</P>
          <P>• مدة الاشتراك (3 أشهر / سنة)</P>
          <P>يمكنك اختيار ما يناسبك… مع توفير كبير عند الاشتراك السنوي.</P>
        </Accordion>

        <Accordion title="ما هو iptv وكيف يعمل؟">
          <P>
            هو تلفزيون يعمل عبر الإنترنت بدلاً من الأقمار الصناعية. مع اشتراك
            iptv بدون تقطيع تستطيع مشاهدة:
          </P>
          <P>
            ✓ القنوات المباشرة ✓ القنوات المشفرة ✓ الأفلام ✓ المسلسلات ✓ المحتوى
            عند الطلب من أي مكان في العالم.
          </P>
        </Accordion>

        <Accordion title="ما هو اشتراك iptv">
          <P>
            هو اشتراك واحد يشمل: قناة تلفزيونية مباشرة، قنوات رياضية مشفرة، بث
            عالمي، باقات حسب الدولة، قنوات السعودية، مكتبة VOD ضخمة، بدون تقطيع.
          </P>
        </Accordion>

        <Accordion title="ما هو أفضل موقع اشتراكات iptv؟">
          <P>
            نحن نقدم: أفضل سيرفر iptv، ثبات عالي، أكثر من 46565 قناة، أكثر من 95
            باقة، دعم على مدار الساعة، تجارب مجانية حقيقية.
          </P>
        </Accordion>

        <Accordion title="كيف يتم الاشتراك في iptv؟">
          <P>
            اطلب التجربة المجانية 12 ساعة، اختر الباقة، ادفع عبر البطاقة، يصلك
            الاشتراك تلقائياً خلال دقائق.
          </P>
        </Accordion>

        <Accordion title="هل يمكن تشغيل اشتراكات iptv على اكثر من جهاز؟">
          <P>
            يمكن توصيل الاشتراك بعدة أجهزة، لكن جهاز واحد فقط يمكنه المشاهدة في
            نفس الوقت لضمان استقرار البث.
          </P>
        </Accordion>

        <Accordion title="هل لا يوجد اشتراك IPTV يعمل على جهازين؟">
          <P>
            نعم، بعض الاشتراكات تسمح بذلك لكن البث يكون ضعيفاً. نوصي بجهاز واحد
            لضمان جودة 4K المستقرة.
          </P>
        </Accordion>
      </div>
    </main>
  );
}
