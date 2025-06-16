export default function Footer() {
    return (
      <footer className="w-full text-center py-4 border-2  text-sm text-gray-500 bg-white">
        <p>
          © {new Date().getFullYear()} Shaheed Nasrullah Gadani Academy. All rights reserved.
        </p>
        <p className="mt-1">
          Developed by <span className="font-medium text-white-700">Muhammad Essa Gadani</span>
        </p>
      </footer>
    );
  }
  