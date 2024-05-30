'use client'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorMode,
   
  } from '@chakra-ui/react';
import { GrSystem } from 'react-icons/gr';
import { SiUnity } from 'react-icons/si';
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
  export const ToggleTheme=()=>{
    const Dim={
      label: 'Dim',
      colorMode: 'dark',
      hex: '#232B37',
      sampleBg: 'linear-gradient(152deg, #232B37 50%, rgba(255, 255, 255, 0.00) 290.71%)',
    }
    const { colorMode,setColorMode} = useColorMode()
   
    return(
      <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<IoMdSettings/>}
      variant='outline'  
    />
    <MenuList style={{minWidth:"120px",padding:"5px",borderRadius:"10px"}}>
      <MenuItem icon={<MdSunny/>} onClick={()=>{ setColorMode('light')}}  style={{borderRadius:"10px",color:colorMode =="light" ? '#5797ff':''}}  >
      <p className="text-xs font-bold text-gray-500" style={{borderRadius:"10px",color:colorMode =="light" ? '#02122b':'' }}>Light</p>
      </MenuItem>
      <MenuItem  icon={<MdDarkMode/>}  onClick={()=>{setColorMode('dark')}} style={{borderRadius:"10px", color:colorMode =="dark" ? '#a9c9fc':''}} >
      <p className="text-xs font-bold text-gray-500"  style={{color:colorMode =="dark" ? '#deebff':''}}>Dark</p>
      </MenuItem>
      <MenuItem icon={<GrSystem/>} style={{borderRadius:"10px"}} onClick={()=>{colorMode !="dark" && setColorMode(Dim.colorMode)}}>
 <p className="text-xs font-bold text-gray-500">System</p>
      </MenuItem>
     
    </MenuList>
  </Menu>
    )
  }
  const menuStyle={

  }