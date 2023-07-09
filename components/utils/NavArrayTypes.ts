export interface NavbarIteamTypes{
    label:string,
    href:string,
    isDropdown:boolean,
    dropdownData?:Array <NavbarIteamTypes>,
    
};

export const NavbarArray: Array <NavbarIteamTypes> =[
    {
        label:"Female",
        href:"/female",
        isDropdown:false,
        
    },
    {
        label:"Male",
        href:"/male",
        isDropdown:false,
        
    },
    {
        label:"Kids",
        href:"/kids",
        isDropdown:false,
        
    },
    {
        label:"All Products",
        href:"/AllProducts",
        isDropdown:false,
        
    },
]
