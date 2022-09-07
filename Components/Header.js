import Link from 'next/link';

export default function Header(){

    return (
    <>
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/Veggie">Veggie</Link>
                <Link href="/Dessert">Dessert</Link>
            </nav>
        </div>
    </>
    );
};