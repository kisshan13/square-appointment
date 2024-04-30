import CartCard from "@/components/Category/CartCard";
import Coupon from "@/components/checkout/Coupons";
import PlusBenefits from "@/components/checkout/PlusBenefits";
import UnlockBenefits from "@/components/checkout/UnlockBenefits";
import PageContainer from "@/components/container/PageContainer";

export default function Home() {
  return (
    <div className="my-8">
      <PageContainer>
        <div className="flex flex-col gap-3 w-full">
          <UnlockBenefits />
          <Coupon />
        </div>
        <div className="flex w-full gap-4 mt-5">
          <div className="w-1/2">
            <PlusBenefits />
          </div>
          <div className="w-1/2">
            <CartCard />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
