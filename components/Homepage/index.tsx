import BannerHomePage from '@/components/BannerHomePage';
import HeaderHomePage from '@/components/HeaderHomePage';
import SectionFooter from '@/components/SectionFooter';
import SectionInfoEvents from '@/components/SectionInfoEvents/indes';
import SectionInfoSoluction from '@/components/SectionInfoSoluction';

export default function HomePage() {
  return (
    <div className="max-w-">
      <HeaderHomePage />
      <BannerHomePage />
      <SectionInfoEvents/>
      <SectionInfoSoluction/>
      <SectionFooter/>
    </div>
  );
}
