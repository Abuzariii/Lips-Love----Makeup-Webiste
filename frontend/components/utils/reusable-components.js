// Import these functions in the components and within curely brackets {} call thse functions, dont just refer to them, call them with braces like renderContent()

import Link from "next/link";

export const renderContent = (
  isLoggedIn,
  RiShoppingCart2Fill,
  poiret,
  orders
) => {
  return isLoggedIn ? (
    <Link href={"/cart"} className="link">
      <RiShoppingCart2Fill size={40} />
      <h4 className={poiret.className}>{orders.orders.length}</h4>
    </Link>
  ) : (
    <Link href={"/login"} className="link">
      <h1 className={poiret.className}>Login/Signup</h1>
    </Link>
  );
};

export const renderContent2 = (
  isLoggedIn,
  RiShoppingCart2Fill,
  poiret,
  orders
) => {
  if (isLoggedIn) {
    return (
      <Link href={"/cart"} className="link">
        <RiShoppingCart2Fill size={40} />
        <h4 className={poiret.className}>{orders.orders.length}</h4>
      </Link>
    );
  } else {
    return (
      <Link href={"/login"} className="link">
        <h1 className={poiret.className}>Login/Signup</h1>
      </Link>
    );
  }
};
