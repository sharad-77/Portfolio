import ProfileImage from '@/components/ui/ProfileImage';
import FramerHand from '@/components/ui/FramerHand';

function HomePage() {
  return (
    <div className="bg-red-20 h-[474px] w-[750px] mt-6">
      <div className="flex h-[260px] w-[750px] justify-center items-center gap-4 ">
        <div className="h-[260px] w-[260px]">
          <ProfileImage />
        </div>

        <div className="h-full w-full flex flex-col items-center gap-2">
          <div className="">
            <p className="text-md font-bold text-gray mt-3 ">
              {' '}
              <span className="mr-1">
                <FramerHand />
              </span>
              Hello I Am
            </p>
            <h1 className="text-3xl font-bold w-full h-[50px] my-1">
              Sharad P
            </h1>
            <p className="text-sm font-medium h-[81px] text-gray">
              Full-stack developer from Gujarat, India, building intuitive web
              apps with clean design and strong performance. Passionate about
              backend architecture and real-world solutions.
            </p>
          </div>

          <div className="mt-4">buttons</div>
        </div>
      </div>

      <div>clauser</div>

      <div>skill items</div>
    </div>
  );
}

export default HomePage;
