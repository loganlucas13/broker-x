import React from 'react';
import BulletListEntry from './BulletListEntry';

type BulletListProperties = {
    entries: {
        variant?: 'primary';
        title: string;
        description?: string;
    }[];
};

const BulletList: React.FC<BulletListProperties> = ( {entries}) => {
    return (
        <div className="px-6 py-3 flex flex-col gap-2 border-2 border-rose-400 rounded-3xl bg-rose-50 w-1/2">
            {entries.map((entry, index) => (
                <BulletListEntry
                    key={index}
                    title={entry.title}
                    description={entry.description}
                    >
                </BulletListEntry>
            ))}
        </div>
    );
}

export default BulletList;