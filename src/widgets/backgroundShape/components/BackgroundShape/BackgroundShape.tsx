export const BackgroundShape = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[url('/images/texture.png')] bg-repeat opacity-0  dark:opacity-60"></div>
      <div className="fixed -left-[150px] -top-[227px] -z-20 h-[820px] w-[820px] flex-shrink-0 rotate-[-17.891deg] rounded-full bg-gradient-to-b from-transparent to-[#FF29C3] opacity-50 blur-[100px] dark:opacity-100"></div>
      <div className="fixed left-[168px] top-[68px] -z-20 h-[559px] w-[394px] flex-shrink-0 rotate-[-17.891deg] bg-gradient-to-b from-transparent to-[#174AFF] opacity-50 blur-[100px] dark:opacity-100"></div>
    </>
  );
};
