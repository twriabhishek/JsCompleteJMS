// js m jo bhi events hotey hai wo mostly sequentially hi execute hotey hai.
//Js ek sequentially run language hai.
//Onclick()
//attachEvent()


//type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY,
//altkey, ctrlkey, shiftkey, keycode


//Event Propagation ka 2 context hota hai : event bubbling, event capturing.
//By default false hota hai mean  event bubbling hota hai.
//Agar hamarey pass ul ke andar li hai aur li ke andar img(ul>li>img), agar humne ul and li dono parr click event laga diya then li par click kiya to fir by default(false) bubbling hogi means andar ka event pahley execute hoga then bahar ka event execute hoga.
//But agar humney true kar diya then capturing mode activate hoga means event pahley ul ka capture hoga then li ka.
//Agar hum nahi chahtey ki bahar ka event bhi trigger ho then humko e.stopPropagation() use karna hoga.
// Agar humko event ka default behaviour change karna hoga then hum e.preventDefault() use karna hoga.