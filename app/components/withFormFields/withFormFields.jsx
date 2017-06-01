import React from 'react';
import FormFields from './FormFields';

export default function withFormFields(WrappedComponent, getDefaultValues) {
  class WithFormFields extends React.Component {

    state = {
      fields: getDefaultValues(this.props),
    };

    handleChange = name => value => {
      const fields = { ...this.state.fields, [name]: value };
      this.setState({ fields });
    };

    render() {
      const fields = new FormFields(this.state.fields, this.handleChange);
      return <WrappedComponent fields={fields} {...this.props} />;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithFormFields.displayName = `withFormFields(${wrappedComponentName})`;

  return WithFormFields;
}

