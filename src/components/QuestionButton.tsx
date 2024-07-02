import { useRouter } from 'next/router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const QuestionButton = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="group fixed bottom-3 end-3 z-10 gap-1 bottom-2 end-2 md:flex lg:bottom-3 lg:end-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary" id="radix-:r3:" aria-haspopup="menu" aria-expanded="false" data-state="closed">?</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 rounded-3xl mr-3">
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path>
              </svg>
            </div>
            email@example.com
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M15 5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L17.586 5zM4 7a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" clipRule="evenodd"></path>
              </svg>
            </div>
            Help & FAQ
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M15 5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L17.586 5zM4 7a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" clipRule="evenodd"></path>
              </svg>
            </div>
            Release notes
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={() => handleNavigate('/policies')}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M15 5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L17.586 5zM4 7a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" clipRule="evenodd"></path>
              </svg>
            </div>
            Terms & policies
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2'>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M5.5 4.914 4.293 6.121A1 1 0 0 0 4 6.828v10.12l1.5-2.25zM7.035 16l-2 3h13.93l-2-3zM18.5 14.697l1.5 2.25V6.437a1 1 0 0 0-.36-.768l-1.14-.95zm-2-.697V4h-9v10zM4.707 2.879A3 3 0 0 1 6.828 2h10.448a3 3 0 0 1 1.92.695l1.725 1.437A3 3 0 0 1 22 6.437V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.828a3 3 0 0 1 .879-2.12z" clipRule="evenodd"></path>
                <path fill="currentColor" d="M12.63 5.936c.067-.36-.29-.592-.477-.311L9.567 9.497c-.153.228-.026.58.209.58h1.967l-.373 1.987c-.067.36.29.592.477.311l2.587-3.872c.152-.228.025-.58-.21-.58h-1.967z"></path>
              </svg>
            </div>
            Keyboard shortcuts
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default QuestionButton;
