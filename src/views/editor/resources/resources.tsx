import type { ITEMS } from '@/constant/resources';
import {
  CATEGORIES,
  EXPANDED_RESOURCE_NAMES,
  RESOURCES
} from '@/constant/resources';
import { b } from '@/helpers';
import useSaveStore from '@/stores/saveStore';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import ResourceInput from './resourceInput/resourceInput';

function Resources(): ReactElement {
  const saveReference = useRef(useSaveStore.getState());
  const offset = saveReference.current.save.indexOfMulti(b`Resources`);

  return (
    <div className='w-full' id='resources'>
      {Object.entries(CATEGORIES).map(([category, items]) => (
        <div className='not-first:mt-10' key={category}>
          <span className='border-b-2 border-drg-primary-500 capitalize'>
            {category}
          </span>
          <div className='grid-cols mt-3 grid grid-rows-1 gap-2 md:w-auto md:grid-cols-2 lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-3'>
            {items.map((item: ITEMS) => (
              <ResourceInput
                key={item}
                item={item}
                name={EXPANDED_RESOURCE_NAMES[item] || item}
                uuid={RESOURCES[item]}
                from={offset}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resources;
