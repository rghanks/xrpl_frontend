import React from 'react'

const Footer = () => {
  return (
   <> 
    <footer class="footer">
        <div class="container">
            <div class="footer__copyright">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p class="footer__copyright__text">
                            Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | XRPL Team
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer