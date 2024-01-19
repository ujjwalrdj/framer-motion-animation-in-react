import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const petData = [
  {
    animal: "Cheetah",
    fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
    image:
      "https://cdn.pixabay.com/photo/2020/02/04/16/00/cheetah-4818603_640.jpg",
  },
  {
    animal: "Koala",
    fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    image:
      "https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117_640.jpg",
  },
  {
    animal: "Elephant",
    fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
  },
  {
    animal: "Zebra",
    fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_640.jpg",
  },
  {
    animal: "Horse",
    fact: "Horses have excellent memory and are capable of recognizing human emotions.",
    image:
      "https://cdn.pixabay.com/photo/2018/05/11/11/11/horse-3390256_640.jpg",
  },
];

const contentVariants = {
  initial: { xy: "100%", opacity: 0 },
  animate: { xy: "0", opacity: 1 },
  exit: { xy: "100%", opacity: 0 },
};

const imgVariants = {
  initial: { scale: 0.1 },
  animate: { scale: 1 },
  exit: { scale: 0.1 },
};

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatePresence mode="wait">
      <motion.div className="tab__container" key={activeTab}>
        <div className="tab__header">
          {petData.map((items, index) => (
            <li
              onClick={() => setActiveTab(index)}
              key={items.animal}
              className={`${index === activeTab && "active"} tab__button`}
            >
              {items.animal}
            </li>
          ))}
        </div>

        <div className="tab__content">
          <motion.img
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imgVariants}
            transition={{ duration: 0.5 }}
            src={petData[activeTab].image}
            alt=""
          />
          <motion.p
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {petData[activeTab].fact}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Tab;
