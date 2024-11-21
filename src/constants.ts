import { Label } from './types.js';

export const DELETE = '3lbi4dxzaic2b';  // Updated rkey for delete
export const LABEL_LIMIT = 8;  // Updated to allow 8 labels

export const LABELS: Label[] = [
  {
    rkey: '3lbi4dxzaic2b',  // rkey for maxis_match
    identifier: 'maxis_match',
    locales: [
      { 
        lang: 'en',  // Language code (English)
        name: 'TS4 Maxis Match',  // Name of the label
        description: 'For Maxis Match CC Creators'  // Description of the label
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic3c',  // rkey for alpha
    identifier: 'alpha',
    locales: [
      { 
        lang: 'en', 
        name: 'TS4 Alpha', 
        description: 'For Alpha CC Creators' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic4d',  // rkey for posemaker
    identifier: 'posemaker',
    locales: [
      { 
        lang: 'en', 
        name: 'TS4 Posemaker', 
        description: 'For Sims 4 Pose Creators' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic5e',  // rkey for storyteller
    identifier: 'storyteller',
    locales: [
      { 
        lang: 'en', 
        name: 'TS4 Storyteller', 
        description: 'For Sims 4 Storytellers' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic6f',  // rkey for modder
    identifier: 'modder',
    locales: [
      { 
        lang: 'en', 
        name: 'TS4 Modder', 
        description: 'For Sims 4 Mod Creators' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic7g',  // rkey for retired creator
    identifier: 'retired_creator',
    locales: [
      { 
        lang: 'en', 
        name: 'Retired Creator', 
        description: 'For Retired Sims 4 Creators' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic8h',  // rkey for retired modder
    identifier: 'retired_modder',
    locales: [
      { 
        lang: 'en', 
        name: 'Retired Modder', 
        description: 'For Retired Sims 4 Mod Creators' 
      },
    ]
  },
  {
    rkey: '3lbi4dxzaic9i',  // rkey for retired posemaker
    identifier: 'retired_posemaker',
    locales: [
      { 
        lang: 'en', 
        name: 'Retired Posemaker', 
        description: 'For Retired Sims 4 Pose Creators' 
      },
    ]
  }
];
