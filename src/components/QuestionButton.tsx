import { useRouter } from 'next/router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShortCutsIcon, ShareRightIcon, CopyIcon } from './icons/Icons';
import Shortcuts from './Question/Shortcuts';

const QuestionButton = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="hidden md:fixed group bottom-3 end-3 z-10 gap-1 bottom-2 end-2 md:flex lg:bottom-3 lg:end-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary" id="radix-:r3:" aria-haspopup="menu" aria-expanded="false" data-state="closed">?</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 rounded-3xl mr-4">
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' disabled>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <CopyIcon />
            </div>
            email@example.com
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' disabled>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Help & FAQ
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' disabled>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Release notes
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={() => handleNavigate('/policies')}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Terms & policies
          </DropdownMenuItem>
          <Shortcuts />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default QuestionButton;
