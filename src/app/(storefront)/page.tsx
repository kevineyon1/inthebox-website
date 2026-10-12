import { PromoBanner } from "@/components/home/PromoBanner";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { ReviewHighlight } from "@/components/home/ReviewHighlight";
import { CategoryPicks } from "@/components/home/CategoryPicks";
import { PaylaterStrip } from "@/components/home/PaylaterStrip";
import { FeaturedPromo } from "@/components/home/FeaturedPromo";
import { ShopRail } from "@/components/home/ShopRail";
import { QuizCta } from "@/components/home/QuizCta";
import { EasySection } from "@/components/home/EasySection";
import { PayLater } from "@/components/home/PayLater";
import { Stories } from "@/components/home/Stories";
import { PressQuotes } from "@/components/home/PressQuotes";
import { DualCta } from "@/components/home/DualCta";
import { Faq } from "@/components/home/Faq";

/** Homepage — urutan section mengikuti referensi layout. */
export default function HomePage() {
  return (
    <>
      <PromoBanner />
      <Hero />
      <ValueProps />
      <ReviewHighlight />
      <PaylaterStrip />
      <FeaturedPromo />
      <CategoryPicks />
      <ShopRail />
      <QuizCta />
      <EasySection />
      <PayLater />
      <Stories />
      <PressQuotes />
      <DualCta />
      <Faq />
    </>
  );
}
