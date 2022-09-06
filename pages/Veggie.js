import Image from "next/image";

export default function Veggie() {

    return (
        <>
            <h1>Veggie Rezepte</h1>,
            <p>alle vegetarischen Rezepte</p>
            <Image
            alt=""
            src="/public/pizza.avif"
            layout="responsive"
            width={2400}
            height={1599}
            />  
        </>
    );
};