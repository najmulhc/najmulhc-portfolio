const Footer:React.FC = () => {
  return (
    <footer className="py-4 border-t-2 px-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-600">© 2023 Your Company</p>
      </div>
      <div>
        <a href="https://www.example.com/privacy" className="text-sm text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}


export default Footer;
