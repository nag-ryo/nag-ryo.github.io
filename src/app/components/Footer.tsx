'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white shadow-inner p-4 text-center mt-8">
            <p className="text-sm text-gray-600">© {currentYear} 炉辺にて、炎と記憶のあいだを旅する</p>
        </footer>
    );
}
