import React from "react";
import SubTitle from "../components/common/SubTitle";
import ThickLine from "../components/common/lines/ThickLine";
import Images from "../assets/img";
import Hero from "../components/common/Hero";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { duration: 1 },
  },
};
function Faq() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.faqHero}
        image={Images.faqMain}
        title={"FAQ"}
        subTitle={"FAQ'S"}
        description1={
          " When choosing a contractor to help you in building your dream home, constructing your business location, or remodeling your existing home, there are a plethora of different qualities to consider as you weigh the pros and cons.  "
        }
        description2={
          "To make the process easier for you, we reached out to our previous customers, our tenants, and members of the community and asked them what qualities of our operation lead them to want to do business with us"
        }
      />

      <div className="px-4 py-14 lg:px-28 lg:py-14 ">
        <div className="flex flex-col gap-6">
          <SubTitle text={"Frequently Asked Questions"} />
          <ThickLine />
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Placerat vestibulum lectus mauris ultrices eros in cursus. Sed
              enim ut sem viverra aliquet eget sit. Et ultrices neque ornare
              aenean euismod. Enim eu turpis egestas pretium aenean. Laoreet id
              donec ultrices tincidunt arcu non sodales neque sodales. Sem
              integer vitae justo eget magna. Lectus urna duis convallis
              convallis tellus. Quis varius quam quisque id diam vel quam. Id
              leo in vitae turpis massa sed. Eget est lorem ipsum dolor sit
              amet. Maecenas pharetra convallis posuere morbi leo. Vestibulum
              sed arcu non odio euismod lacinia at quis risus. Volutpat maecenas
              volutpat blandit aliquam etiam erat. Senectus et netus et
              malesuada. Ullamcorper malesuada proin libero nunc consequat
              interdum varius sit amet. Varius vel pharetra vel turpis nunc
              eget. A condimentum vitae sapien pellentesque habitant morbi
              tristique. Quisque sagittis purus sit amet volutpat consequat
              mauris nunc. Ut sem viverra aliquet eget sit. Velit euismod in
              pellentesque massa placerat. Viverra vitae congue eu consequat.
              Facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis. Adipiscing elit pellentesque habitant morbi tristique.
              Gravida in fermentum et sollicitudin ac orci. Arcu ac tortor
              dignissim convallis aenean. Tincidunt id aliquet risus feugiat in
              ante metus. Non pulvinar neque laoreet suspendisse interdum
              consectetur libero id faucibus. Feugiat vivamus at augue eget.
              Pellentesque diam volutpat commodo sed egestas egestas fringilla.
              Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
              Sed odio morbi quis commodo. Convallis posuere morbi leo urna
              molestie at elementum. Pulvinar mattis nunc sed blandit libero
              volutpat sed cras. Consectetur libero id faucibus nisl. Praesent
              semper feugiat nibh sed pulvinar proin. Mauris vitae ultricies leo
              integer malesuada. Aenean vel elit scelerisque mauris
              pellentesque. Tellus mauris a diam maecenas sed enim ut sem.
              Dignissim convallis aenean et tortor at risus viverra adipiscing
              at. Ac ut consequat semper viverra nam libero justo laoreet.
              Varius morbi enim nunc faucibus. Orci a scelerisque purus semper
              eget duis. Vitae tortor condimentum lacinia quis vel eros donec.
              In mollis nunc sed id semper. Nam aliquam sem et tortor consequat
              id porta nibh. Suspendisse potenti nullam ac tortor vitae purus
              faucibus. Nisl nisi scelerisque eu ultrices vitae auctor. Lacus
              vestibulum sed arcu non odio euismod lacinia. Neque aliquam
              vestibulum morbi blandit cursus risus. Semper risus in hendrerit
              gravida. Proin sagittis nisl rhoncus mattis rhoncus urna neque
              viverra justo. Diam in arcu cursus euismod quis. Purus sit amet
              volutpat consequat. Integer malesuada nunc vel risus commodo.
              Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.
              Eget velit aliquet sagittis id consectetur purus. Cursus turpis
              massa tincidunt dui ut ornare lectus. Commodo nulla facilisi
              nullam vehicula ipsum a arcu cursus vitae. Gravida cum sociis
              natoque penatibus. Turpis massa tincidunt dui ut ornare.
              Scelerisque purus semper eget duis at tellus. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit. Sed risus ultricies
              tristique nulla. Tristique sollicitudin nibh sit amet commodo
              nulla. Massa tempor nec feugiat nisl pretium fusce id velit. Fames
              ac turpis egestas sed tempus urna et pharetra pharetra. Ut sem
              viverra aliquet eget sit amet tellus cras adipiscing. Neque
              egestas congue quisque egestas diam in arcu. Feugiat pretium nibh
              ipsum consequat nisl vel pretium. Elementum pulvinar etiam non
              quam. Massa eget egestas purus viverra accumsan. In aliquam sem
              fringilla ut morbi tincidunt augue interdum velit. Ornare arcu dui
              vivamus arcu. Fermentum leo vel orci porta non pulvinar neque
              laoreet. Euismod nisi porta lorem mollis aliquam ut porttitor leo
              a. Quis eleifend quam adipiscing vitae. Luctus accumsan tortor
              posuere ac ut consequat. Blandit cursus risus at ultrices mi. Diam
              volutpat commodo sed egestas egestas fringilla phasellus. Turpis
              egestas sed tempus urna et pharetra pharetra.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
