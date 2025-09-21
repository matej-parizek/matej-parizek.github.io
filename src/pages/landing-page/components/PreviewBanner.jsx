export default function PreviewBanner() {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <p className="font-semibold">🚧 This website is currently under development.</p>
      <p className="text-sm">
        The content you see is a preview version. Some features are not working and the data shown is for demonstration purposes only.
      </p>
    </div>
  );
}
