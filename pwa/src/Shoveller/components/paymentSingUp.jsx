import { useNavigate } from "react-router-dom";

export default function PaymentSingUp() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/shoveller/searchJobByList");
  }
  const handleBack = () => {
    navigate('/shoveller/paymentSingIn')
  }
  const handleSignIn = () => {
    navigate('/shoveller/paymentSingIn')
  }
  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img onClick={handleBack}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
        />
        <div className="flex flex-col mt-5 text-black">
          <div className="text-2xl font-medium tracking-wide">
            Payment Information
          </div>
          <div className="mt-6 text-xs leading-5">
            Sign up for your Stripe account by entering your email, choosing a
            preferred username, and setting your password below.
          </div>
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            <div className="flex flex-col justify-center p-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <div className="self-stretch my-auto">Email</div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7930eda02fea525ea6913e1fdff860278450c3b9fdc76984c35f300257d5294f?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <div className="self-stretch my-auto">Preferred Username</div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-10 justify-between items-center w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <div className="self-stretch my-auto">Password</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28f9ade3d0f0bb918707d9545a60e75e076cb520f2be29c78c6bd4a01cbde28?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-10 justify-between items-center w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <div className="self-stretch my-auto">Confirm Password</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/745dfa849da759e3d67fcbf5a3445178760fb569e0ee9fbb70e2a2b09aa37b98?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex-1 shrink gap-2.5 self-stretch pr-2 mt-3 w-full text-xs text-right text-neutral-400">
              have an account? <span onClick={handleSignIn} className="text-black">Signin</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-20 text-xl font-medium tracking-wider text-center text-white whitespace-nowrap">
          <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 w-full bg-black rounded-lg min-w-[240px]">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
}