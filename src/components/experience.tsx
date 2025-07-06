import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Experience() {
  return (
    <div className="w-full flex flex-col items-start ">
      <h1 className="text-2xl font-semibold md:mb-[25px] uppercase">
        Experience
      </h1>
      <Tabs
        defaultValue="account"
        className="w-full h-auto flex flex-col md:flex-row items-start md:gap-[40px] lg:gap-[80px]"
      >
        <TabsList className="rounded-0 bg-transparent gap-[14px] mt-[25px] flex items-center justify-center md:flex-col">
          <TabsTrigger
            value="account"
            className="group h-[60px] p-0 flex items-start justify-between rounded-none border-0 focus:border-0 bg-background"
          >
            <div className="w-[144px] h-[40px] flex items-center justify-center group-data-[state=active]:bg-dark-200">
              Account
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="group h-[60px] p-0 flex items-start justify-between rounded-none border-0 focus:border-0 bg-background"
          >
            <div className="w-[144px] h-[40px] flex items-center justify-center group-data-[state=active]:bg-dark-200">
              Password
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className="mt-[30px] md:mt-0 w-full h-full flex flex-col justify-between gap-[25px]  md:max-w-[750px]"
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base md:text-2xl font-medium">
              Professor conteudista em Frontend
            </h1>
            <span className="text-base font-medium text-white hidden md:block">
              NOV 2021 - Atual
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <h2 className="text-sm text-blue font-medium">Digital House</h2>
            <span className="text-xs font-medium text-white md:hidden">
              NOV 2021 - Atual
            </span>
          </div>
          <p className="text-sm md:text-lg text-justify font-light text-gray-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </p>
        </TabsContent>
        <TabsContent
          value="password"
          className="mt-[30px] md:mt-0 w-full  h-full flex flex-col justify-between gap-[25px] md:max-w-[750px]"
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base md:text-2xl font-medium">
              Professor conteudista em Backend
            </h1>
            <span className="text-base font-medium text-white hidden md:block">
              NOV 2021 - Atual
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <h2 className="text-sm text-blue font-medium">Digital House</h2>
            <span className="text-xs font-medium text-white md:hidden">
              NOV 2021 - Atual
            </span>
          </div>
          <p className="text-sm md:text-lg text-justify font-light text-gray-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
