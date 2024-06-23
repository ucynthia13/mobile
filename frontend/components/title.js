import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import classNames from 'classnames';

const Title = ({ primary }) => {
  const buttonClass = classNames('flex flex-row text-2xl');

  const supaTextClass = classNames('font-bold text-2xl', {
    'text-white': primary,
    'text-gray-200': !primary,
  });

  const menuTextClass = classNames('font-bold text-2xl', {
    'text-black': primary,
    'text-orange-400': !primary,
  });

  return (
    <TouchableOpacity className={buttonClass}>
      <Text className={supaTextClass}>Supa</Text>
      <Text className={menuTextClass}>Menu</Text>
    </TouchableOpacity>
  );
};

export default Title;
