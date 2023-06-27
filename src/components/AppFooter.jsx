
export const AppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <div className="py-6">
      <footer className="flex justify-center">
        <p className="text-sm font-light">&copy; {year} FrontEndStarter | All Rights Reserved</p>
      </footer>
    </div>
  )
}
