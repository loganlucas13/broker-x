import React, { useState } from 'react';
import Button from './Button';

type BulletListEntryProperties = {
    variant?: 'primary'; // for now, only 1 variant available (in the future, more may be added if necessary)
    title: string;
    description?: string; // optional - intended use for the FAQ list
    children?: React.ReactNode;
};

const BulletListEntry: React.FC<BulletListEntryProperties> = ({
    variant = 'primary',
    title,
    description,
}) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const divVariantStyling = {
        primary: 'flex flex-col items-center text-rose-400',
    };
    const selectedDivVariantStyling = divVariantStyling[variant];

    const titleVariantStyling = {
        primary:
            'flex justify-between items-center px-4 py-2 border-2 border-rose-400 rounded-full gap-10 bg-stone-100 font-semibold w-full z-10 hover:bg-rose-100 hover:cursor-pointer hover:underline hover:decoration-2 hover:decoration-dotted hover:underline-offset-8',
    };
    const selectedTitleVariantStyling = titleVariantStyling[variant];

    const descriptionVariantStyling = {
        primary:
            'px-4 pt-14 pb-2 text-center bg-stone-100 border-2 border-rose-400 rounded-3xl -mt-12 w-full z-0',
    };
    const selectedDescriptionVariantStyling =
        descriptionVariantStyling[variant];

    return (
        <div className={`${selectedDivVariantStyling}`}>
            <div
                className={`${selectedTitleVariantStyling}`}
                onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            >
                <span>{title}</span>
                {description && (
                    <Button
                        onClick={() =>
                            setIsDescriptionVisible(!isDescriptionVisible)
                        }
                    >
                        {isDescriptionVisible ? 'Hide' : 'Show'}
                    </Button>
                )}
            </div>
            {isDescriptionVisible && description && (
                <div className={`${selectedDescriptionVariantStyling}`}>
                    <span>{description}</span>
                </div>
            )}
        </div>
    );
};

export default BulletListEntry;
