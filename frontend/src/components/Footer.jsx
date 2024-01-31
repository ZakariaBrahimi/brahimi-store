import box from '../assets/box.png'
const Footer = () => {
  return (
    // TODO: make fixed at the bottom
    <footer className="bg-[#FAFAFA]  w-full pt-10 border-t-2 ">
      <div className="flex sm:flex-row space-y-10 sm:space-y-0 text-center sm:text-right flex-col justify-between items-center py-10 w-11/12 lg:w-9/12 xl:w-8/12 mx-auto">
        <div className='space-y-4'>
          {/* LOGO */}
          <div className='flex items-center gap-2 text-2xl'>
          <img className="w-16 h-16" src={box}/>
          <p className="font-bold text-inherit tracking-wider	"> <span className="text-red-500">Brahimi</span> Store</p>
          </div>
          <p>جميع الحقوق محفوظة © 2024 </p>
        </div>
        <div className="text-[#00000082] space-y-1">
          <h4 className="opacity-75 text-lg mb-2">تواصل معنا</h4>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a>إتصل بنا</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> الأسئلة المتكررة</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'> <a> 0665915411 :هاتف</a> </h5>
        </div>
        <div className="text-[#00000082] space-y-1">
          <h4 className="opacity-75 text-lg mb-2">الشروط والسياسات </h4>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> شروط الاستخدام</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> سياسة الإستبدال والإسترجاع</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> سياسة الخصوصية</a> </h5>
        </div>
        <div className="text-[#00000082] space-y-1">
          <h4 className="opacity-75 text-lg mb-2">عن المتجر</h4>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> من نحن؟</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> طرق الدفع</a> </h5>
          <h5 className='hover:text-red-400 transition-colors duration-700 cursor-pointer'><a> الشحن والتسليم</a> </h5>
        </div>
      </div>
      <p className="text-center py-6  border-t-2  ">Copyright © 2024 <span className='font-semibold'> BRAHIMI STORE.</span></p>
    </footer>
  );
};

export default Footer;
