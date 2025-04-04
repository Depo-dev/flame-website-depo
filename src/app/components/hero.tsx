import Image from "next/image";
import people from '../../../public/Images/people.png';
import icon from '../../../public/Images/new.svg';
import Phone from '../../../public/Images/smart-phone.svg';
import Laptop from '../../../public/Images/laptop.svg';
import info from '../../../public/Images/info.svg';
import playstore from '../../../public/Images/playstore.png';
import appstore from '../../../public/Images/appstore.png';
import phonemockups from '../../../public/Images/Phone-Mockups.png';
import modals from '../../../public/Images/Modals.png';
import star from '../../../public/Images/star.png';
import shield from '../../../public/Images/shield.png';
import wallet from '../../../public/Images/wallet.png';
import man from '../../../public/Images/man.png';

const Hero = () => {
    return (
        <div className="relative">
            <div>
                <div className="w-fit mx-auto bg-white rounded-3xl py-2 px-1 flex flex-col items-center justify-center gap-4 shadow-md mt-20">
                    <div className="flex items-center justify-center text-center gap-10">
                        <Image src={people} height={40} width={45} alt="people" className="cursor-pointer" />
                        <p>Where Social Meets Privacy & Rewards</p>
                        <Image src={icon} height={40} width={40} alt="new" className="cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center leading-24 text-center">
                    <p className="text-[5rem] font-bold bg-gradient-to-r from-[#FF640D] from-40% to-[#AB20AB] to-60% bg-clip-text text-transparent">
                        Socialize. Earn.
                    </p>
                    <p className="text-[5rem] font-bold">Stay Private.</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center mt-5 gap-4">
                    <p className="opacity-60 font-semibold">The next-gen SocialFi app where privacy meets opportunity</p>
                    <div className='flex items-center gap-2'>
                        <button className='border border-black px-3 py-3 rounded-3xl flex items-center gap-2'>
                            <Image src={Phone} width={24} height={24} alt='Phone' />
                            <p className=' font-bold text-[14px]'>Download Mobile App</p>
                        </button>
                        <button className='bg-[#292929] px-4 py-3 rounded-3xl flex items-center gap-2'>
                            <Image src={Laptop} width={24} height={24} alt='PC' />
                            <p className='text-white font-bold text-[14px]'>Open Web App</p>
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-center mt-2">
                        <div className="flex items-center justify-center gap-2">
                            <Image src={info} width={25} height={40} alt="infoicon" />
                            <p className="text-lg opacity-60 font-semibold">App available for </p>
                        </div>
                        <div className="bg-black w-fit flex items-center justify-center gap-2 rounded-full px-2 py-1">
                            <Image
                                src={playstore}
                                width={30}
                                height={26}
                                alt="playstore"
                                className="border-r-2 border-[#28282C] pr-2"
                            />
                            <Image
                                src={appstore}
                                width={30}
                                height={26}
                                alt="appstore"
                                className="pl-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center relative pt-[5%]">
                    <Image src={phonemockups} width={1500} height={330} alt="mockups" />
                    <Image src={modals} width={1200} height={210} alt="mockups" className="absolute" />
                </div>
            </div>


            <Image src={star} width={100} height={210} alt="mockups" className="absolute top-3 left-1/4" />
            <Image src={wallet} width={200} height={210} alt="mockups" className="absolute top-3 right-1/4" />
            <Image src={man} width={120} height={210} alt="mockups" className="absolute top-1/3 left-1/5" />
            <Image src={shield} width={200} height={210} alt="mockups" className="absolute top-1/3 right-1/5" />
        </div>
    );
}

export default Hero;