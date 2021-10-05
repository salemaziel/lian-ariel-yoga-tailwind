import React from 'react'





function ListItem(props) {
    return(
        <ul>
        {props.items.map((item, index) => (
              <li className="flex items-center py-2 space-x-4 xl:py-3" key={index}>
                <img src={item.icon} /*src="https://cdn.devdojo.com/images/february2021/checkmark.png"*/ className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-100 text-shadow-lg">{item.title}</span>
              </li>
           
          ))}
           </ul>

    );
};

export default ListItem