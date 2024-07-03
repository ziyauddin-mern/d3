import {
  BasicButton,
  BlueButton,
  DarkButton,
  GreenButton,
  OutlineButton,
  RedButton,
} from "./Button";

import { BasicAlert, BlueAlert, GreenAlert, RedAlert } from "./Alert";
import Jumbotron from "./Jumbotron";
import Progress from "./Progress";
import Image from "./Image";
import Input from "./Input";

const App = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="grid grid-cols-2 gap-8 px-12">
        <div className="border p-4 bg-white shadow-xl rounded-lg">
          <h1 className="text-3xl text-center font-bold animate-pulse">
            Shared Buttons
          </h1>
          <div className="py-8 space-x-4 space-y-4">
            <BasicButton />
            <BlueButton />
            <GreenButton />
            <RedButton />
            <OutlineButton />
            <DarkButton />
            <GreenButton />
            <RedButton />
            <BasicButton />
            <DarkButton />
          </div>
        </div>

        <div className="border p-4 bg-white shadow-xl rounded-lg">
          <h1 className="text-3xl text-center font-bold animate-pulse">
            Shared Alerts
          </h1>
          <div className="py-8 grid grid-cols-2 gap-4">
            <BasicAlert />
            <GreenAlert />

            <BlueAlert />
            <RedAlert />
          </div>
        </div>

        <div className="border p-4 bg-white shadow-xl rounded-lg col-span-2">
          <h1 className="text-3xl text-center font-bold animate-pulse">
            Shared Jumbotron
          </h1>
          <div className="py-8 grid  gap-4">
            <Jumbotron color="green" />
            <Jumbotron color="red" />
            <Jumbotron color="blue" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="border p-4 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl text-center font-bold animate-pulse">
              Shared Progress
            </h1>
            <div className="py-8 grid grid-cols-2 gap-4">
              <Progress value={30} />
              <Progress value={60} color="red" />
              <Progress value={70} color="blue" />
              <Progress value={30} color="green" />
            </div>
          </div>

          <div className="border p-4 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl text-center font-bold animate-pulse">
              Shared Input
            </h1>
            <div className="py-8 grid grid-cols-2 gap-4">
              <Input
                className="border-b outline-none hover:border-blue-600 focus:border-amber-600 duration-300 text-lg placeholder:text-gray-300 font-semibold"
                placeholder="Your Content Write Here."
              />

              <Input
                className="border px-4 py-1 outline-none hover:border-blue-600 focus:border-amber-600 duration-300 placeholder:text-gray-300 font-semibold"
                placeholder="Your Content Write Here."
              />
            </div>
          </div>
        </div>

        <div className="border p-4 bg-gray-400 shadow-xl rounded-lg text-white">
          <h1 className="text-3xl text-center font-bold animate-pulse">
            Shared Image
          </h1>
          <div className="py-8 grid grid-cols-2 gap-4">
            <Image src="/newyork.jpg" type="circle" />
            <Image src="/paris.jpg" type="thumbnail" />
            <Image src="/sanfran.jpg" type="rounded" />
          </div>
        </div>
      </div>

      {/* testing in this area */}
      <div className="hidden">
        <h1 className="text-lg text-gray-400 text-center my-8">
          Test Shared Components
        </h1>
      </div>
    </div>
  );
};
export default App;
