"use client"; // ضروري لاستخدام useAccordion
// Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

// حل مشكلة المسار: تأكد أن الملف موجود في مجلد app باسم globals.css أو قم بتسميته Style.css في نفس المجلد


import Accordion from "./components/Accordion";
import useAccordion from "./custom_hooks/useAccordion";
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
import Youssef from "./components/HtmlTools/Youssef";
import ButtonRed from "./components/HtmlTools/ButtonRed";
import { MessageIcon, TvIcon, FilmoIcon } from "./components/Icons";
import { ChatIcon } from "./components/Icons";

import { TagIcon } from "./components/Icons";
import My_List from "./components/ChannelList/My_List";

export default function Home() {
  const { openIndex, toggle } = useAccordion();

  return (
    <main className="  relative overflow-x-auto">
      {/* --- Hero Section --- */}
      <DivScreen>
        
        <H1>
          أفضل اشتراك IPTV بدون تقطيع – تجربه مجانيه مشاهدة مستقرة تحديثات يوميا ومحتوى ضخم في اشتراك
          واحد
        </H1>
        <P>
          إذا كنت تبحث عن أفضل اشتراك IPTV يوفر لك مزيجًا من الجودة، الثبات،
          والمحتوى اللامحدود، فإن <Youssef />
          يقدم لك اشتراك IPTV بدون تقطيع مصمم ليعمل بأعلى كفاءة على جميع
          الأجهزة، ويمنحك وصولًا مباشرًا إلى آلاف القنوات العربية والعالمية،
          المشفرة والمفتوحة، إضافة إلى مكتبة أفلام ومسلسلات ضخمة يتم تحديثها
          يوميًا.
        </P>

        <H2>
          مع
          <Youssef /> ستحصل على قنوات رياضية مشفرة، مكتبة VOD عالمية، وتجربة
          مشاهدة مستقرة عبر سيرفر IPTV بجودة عالية وبدون مشاكل. كل ذلك عبر
          <Youssef />
        </H2>

        <FlexBox className=""> 
            <ButtonRed  href="Pages/freetrial" LinkText="جرّب قبل أن تشترك" />
          <ButtonRed  href="Pages/Subscriptions" LinkText=" ابدا المشاهده الان" />
        </FlexBox>
          
        
      </DivScreen>

      <My_List />

      {/**<My_List /> */}

      {/* --- القسم الأول: Menu_right --- */}
      <Menu_right
       
      
        title={
          "اشتراك IPTV الأكثر كفاءة… بجودة عالية، بدون تقطيع، وبثّ ثابت 24/7"
        }
        paragraph1={
          "نحن نقدم لك اشتراك IPTV يعتمد على سيرفرات مستقرة عالية الأداء، مصممة لضمان سرعة التنقل بين القنوات بدون أي بطء أو انقطاعات."
        }
        paragraph2={
          "سواء كنت تريد اشتراك IPTV لمدة سنة أو اشتراك لمده سته اشهر او ثلاث اشهر او شهر في نفس الوقت، ستجد جميع الخيارات جاهزة للاستخدام الفوري."
        }
        paragraph3={"نحن المتجر الرسمي الذي يضمن لك:"}
        paragraph4={
          " مشاهده من أي دولة … السعودية، أوروبا، الخليج، العالم... تفعيل فوري خلال ثوانٍ بدون التزام – وبدون بيانات مصرفية للتجربة المجانية"
        }
       
        
      > 
      <ButtonRed href="Pages/Subscriptions" LinkText="اختر باقتك المناسبة"></ButtonRed>
      
      </Menu_right>

      {/* --- القسم الثاني: Menu_left --- */}
      <Menu_left
      className=""
        title={
          "أكثر من 46565 قناة مباشرة – عربية وعالمية – بتقنيات SD / HD / FHD / 4K / 8k"
        }
        paragraph1={
          "باستخدام اشتراك IPTV  ستشاهد أكبر مجموعة قنوات مقسّمة حسب النوع والدولة:"
        }
        paragraph2={
          "كل قناة تعمل بجودات متنوعة لضمان تشغيلها على أي سرعة إنترنت، ليبقى اشتراك IPTV بدون تقطيع مهما كان اتصالك."
        }
        paragraph3={
          "• القنوات العربية • القنوات الرياضية المشفرة • باقات عالمية • قنوات ترفيهية • قنوات الأطفال • قنوات الأخبار • القنوات الأجنبية • قنوات احتياطية لكل قناة لضمان عدم حدوث تقطيع"
        }
        paragraph4={
          " كل قناة تعمل بجودات متنوعة لضمان تشغيلها على أي سرعة إنترنت، ليبقى اشتراك IPTV بدون تقطيع مهما كان اتصالك."
        }
        
        buttonUrl={<ButtonRed href="Pages/Subscriptions" LinkText="اشترك الآن وابدأ المشاهدة"/>}
      >
       
        
        
          <Section
            icoun={"fa-regular fa-message"}
            title={"أفضل خدمة دعم فني – 24/7"}
            paragraph={
              "من أول لحظة تبدأ فيها البحث عن اشتراك IPTV مناسب وحتى تشغيل الاشتراك على جهازك، فريقنا يقدّم لك الدعم المستمر. سواء كنت تريد تفعيل اشتراك IPTV أو حل مشكلة في جهازك، نحن متواجدون دائمًا."
            }
          >
            <ChatIcon />
          </Section>
        
        
          <Section
            icoun={"fa-solid fa-tv"}
            title={"اشتراك IPTV يعمل على كل الأجهزة"}
            paragraph={
              "اشتراك IPTV يعمل على جميع الأجهزة ويدعم كل الأنظمة، مع دليل شرح كامل ومفصّل لتفعيل اشتراك IPTV خطوة بخطوة على أي جهاز بسهولة تامة."
            }
          >
            <TvIcon />
          </Section>
        
        
          <Section
            icoun={"fa-solid fa-envelope"}
            title={"تفعيل وتسليم فوري"}
            paragraph={
              "نحن نقدم اشتراك اي بي تي في رسمي يتميز بجودة بث ممتازة مع قناة احتياطية لكل قناة وأسعار منافسة وعروض مستمرة بالإضافة إلى اشتراك IPTV لمدة سنة كاملة لمن يرغب في أفضل توفير"
            }
          >
            <MessageIcon />
          </Section>
        
        
          <Section
            icoun={"fa-solid fa-tag"}
            title={"اشتراك واحد… يغنيك عن عشرات الاشتراكات"}
            paragraph={
              "بسبب الكم الهائل من القنوات والباقات والمحتوى المتوفر، لن تحتاج لأي اشتراك آخر. هذا ما يجعل أفضل اشتراك IPTV بدون تقطيع وبدون الحاجة لشراء اشتراكات متعددة."
            }
          >
            <TagIcon />
          </Section>
        
      </Menu_left>

      {/* --- القسم الثالث: Menu_right (VOD) --- */}
      <Menu_right
        title={"مكتبة أفلام ومسلسلات VOD – أكثر من 153859 فيلم و39949 مسلسل"}
        paragraph1="معنا لن تحتاج لأي منصة أخرى. تحصل تلقائيًا على:"
        paragraph2=""
        paragraph3=""
        paragraph4=""
        
        
        
        
       
      >
        
        <P>✓ افلام جوده عاليه</P>
        <P>✓ مسلسلات عربية وعالمية</P>
        <P>✓ محتوى أمريكي – تركي – هندي – كوري – أنيميشن......</P>
        <P>✓ تحديث يومي للحلقات الجديدة</P>
        <P>✓ تنظيم داخل باقات تسهّل الوصول لأي محتوى</P>
        <P >
          كل هذا ضمن أفضل اشتراك IPTV بجودة عالية وبدون تحميل أو انتظار.
        </P>
        <ButtonRed href="Pages/Subscriptions" LinkText="احصل على الوصول الكامل للمكتبة"/>
      </Menu_right>

      {/* --- القسم الرابع: Menu_left (Free Trial) --- */}
     <Menu_left
     className=""
  title={
    "اشتراك IPTV مجاني لمدة 12 ساعة – بدون تقطيع – وبدون بيانات مصرفية"
  }
  paragraph1={"نوفر لك هذه التجربة المجانية لتتأكد من سرعة التنقل بين القنوات وتفحص ثبات البث بجودةعاليه  يمكنك الآن اختبار سرعة التنقل بين القنوات وتفحص ثبات البث بنفسك، "}
  
  paragraph6={"ما الذي ستحصل عليه في تجربتك المجانية؟"}
  
  paragraph2={"✓ الوصول الشامل لجميع القنوات الرياضية والسينمائية بجودة 4K و Ultra HD."}
  
  paragraph3={"✓ تجربة كاملة لجميع الباقات العربية والعالمية المقسمة حسب الدولة والنوع."}
  
  paragraph4={"✓ تصفح مكتبة الأفلام والمسلسلات (VOD) المحدثة يومياً بأعلى دقة."}
  
  paragraph5={"✓ تفعيل فوري وآمن: بدون قيود، بدون عقود، والأهم.. بدون طلب أي بيانات بطاقة بنكية."}
  
  buttonUrl={<ButtonRed href="Pages/freetrial" LinkText="اطلب تجربتك بدون التزام الآن"/>}
>
  {/* البطاقة الأولى */}
  <ArticleCard
    title={"اختبر الجودة قبل الشراء"}
    paragraph={
      "استمتع بجودة بث فائقة وثبات مطلق على جميع الأجهزة. ابدأ الآن بتجربة IPTV مجانية شاملة لكل المميزات، وتأكد من استقرار الخدمة في أوقات الذروة قبل الالتزام بالاشتراك الكامل."
    }
    ButtonUrl={<ButtonRed href="Pages/freetrial" LinkText="تجربه مجانيه"/>}
  >
    <TvIcon/>
  </ArticleCard>

  {/* البطاقة الثانية */}
  <ArticleCard
    title={"سرعة بث وثبات لا يقارن"}
    paragraph={
      "نوفر لك أقوى السيرفرات العالمية لاكتشاف سرعة التنقل بين القنوات وتنوع المحتوى الضخم. جرّب الخدمة الآن وتعرف على الفرق في الجودة والأداء بنفسك لتشترك معنا بكل ثقة."
    }
    ButtonUrl={<ButtonRed href="Pages/freetrial" LinkText="جرب مجانا"/>}
  >
    <FilmoIcon/>
  </ArticleCard>
</Menu_left>
      <StatsSection />

      {/* --- الأسئلة الشائعة --- */}
      
      <div className="py-10 text-center   px-4">

        <H2 >
          الأسئلة الشائعة حول اشتراك IPTV
        </H2>

        <Accordion
          title="كم سعر اشتراك iptv؟"
          isOpen={openIndex === 1}
          onClick={() => toggle(1)}
        >
          
            <P>تعتمد تكلفة الاشتراك على:</P>
            <P>• مدة الاشتراك (3 أشهر / سنة)</P>
            <P>يمكنك اختيار ما يناسبك… مع توفير كبير عند الاشتراك السنوي.</P>
        
        </Accordion>

        <Accordion
          title="ما هو iptv وكيف يعمل؟"
          isOpen={openIndex === 2}
          onClick={() => toggle(2)}
        >
          
            <P>
              هو تلفزيون يعمل عبر الإنترنت بدلاً من الأقمار الصناعية. مع اشتراك
              iptv بدون تقطيع تستطيع مشاهدة:
            </P>
            <P>
              ✓ القنوات المباشرة ✓ القنوات المشفرة ✓ الأفلام ✓ المسلسلات ✓
              المحتوى عند الطلب من أي مكان في العالم.
            </P>
          
        </Accordion>

        <Accordion
          title="ما هو اشتراك iptv"
          isOpen={openIndex === 3}
          onClick={() => toggle(3)}
        >
          
            <P>
              هو اشتراك واحد يشمل: قناة تلفزيونية مباشرة، قنوات رياضية مشفرة، بث
              عالمي، باقات حسب الدولة، قنوات السعودية، مكتبة VOD ضخمة، بدون
              تقطيع.
            </P>
          
        </Accordion>

        <Accordion
          title="ما هو أفضل موقع اشتراكات iptv؟"
          isOpen={openIndex === 4}
          onClick={() => toggle(4)}
        >
          
            <P>
              نحن نقدم: أفضل سيرفر iptv، ثبات عالي، أكثر من 46565 قناة، أكثر من
              95 باقة، دعم على مدار الساعة، تجارب مجانية حقيقية.
            </P>
          
        </Accordion>

        <Accordion
          title="كيف يتم الاشتراك في iptv؟"
          isOpen={openIndex === 5}
          onClick={() => toggle(5)}
        >
          
            <P>
              اطلب التجربة المجانية 12 ساعة، اختر الباقة، ادفع عبر البطاقة، يصلك
              الاشتراك تلقائياً خلال دقائق.
            </P>
          
        </Accordion>

        <Accordion
          title="هل يمكن تشغيل اشتراكات iptv على اكثر من جهاز؟"
          isOpen={openIndex === 7}
          onClick={() => toggle(7)}
        >
          
            <P>
              يمكن توصيل الاشتراك بعدة أجهزة، لكن جهاز واحد فقط يمكنه المشاهدة
              في نفس الوقت لضمان استقرار البث.
            </P>
        
        </Accordion>

        <Accordion
          title="هل لا يوجد اشتراك IPTV يعمل على جهازين؟"
          isOpen={openIndex === 6}
          onClick={() => toggle(6)}
        >
          
            <P>
              نعم، بعض الاشتراكات تسمح بذلك لكن البث يكون ضعيفاً. نوصي بجهاز
              واحد لضمان جودة 4K المستقرة.
            </P>
        
        </Accordion>
      </div>
    </main>
  );
}
