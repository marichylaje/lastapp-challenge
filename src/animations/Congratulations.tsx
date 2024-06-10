import React from 'react';
import { motion } from 'framer-motion';
import './congratulations.css';

const confettiVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: { duration: 1, ease: 'easeIn' }
    }
};

const Congratulations: React.FC = () => {
    return (
        <div className="congratulations-container">
            {[...Array(50)].map((_, index) => (
                <motion.div
                    key={index}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                    variants={confettiVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                />
            ))}
        </div>
    );
};

export default Congratulations;
