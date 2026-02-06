import { useState, useCallback, useEffect } from 'react';
import { PropsControl, PropConfig } from './PropsControl';
import { CodePreview } from './CodePreview';

export interface StoryConfig<T extends object = object> {
  id: string;
  title: string;
  component: React.ComponentType<T>;
  description?: string;
  defaultProps: T;
  propsConfig?: Record<string, PropConfig>;
  presets?: Array<{
    name: string;
    props: T;
  }>;
  isVoidElement?: boolean;
  /** When children are React elements, this placeholder is shown in the code preview instead of serializing them. */
  childrenCodePlaceholder?: string;
}

export interface ComponentDocProps<T extends object = object> {
  story: StoryConfig<T>;
}

export function ComponentDoc<T extends object = object>({
  story,
}: ComponentDocProps<T>) {
  const [currentProps, setCurrentProps] = useState<T>(story.defaultProps);

  useEffect(() => {
    setCurrentProps(story.defaultProps);
  }, [story.id, story.defaultProps]);

  const handlePropsChange = useCallback((newProps: Record<string, unknown>) => {
    setCurrentProps(newProps as T);
  }, []);

  const handlePresetSelect = useCallback((presetProps: T) => {
    setCurrentProps(presetProps as T);
  }, []);

  const generateCode = useCallback(() => {
    const Component = story.component;
    const componentName =
      Component.displayName || Component.name || 'Component';

    const shouldFilterChildren = story.isVoidElement ?? false;

    const currentPropsAsRecord = currentProps as Record<string, unknown>;
    const childrenValue = currentPropsAsRecord.children;
    const isComplexChildren =
      childrenValue !== undefined &&
      childrenValue !== null &&
      typeof childrenValue !== 'string';

    const propsEntries = Object.entries(currentPropsAsRecord)
      .filter(([, value]) => {
        if (value !== undefined && value !== '') {
          return true;
        }
        return false;
      })
      .filter(([key]) => {
        if (key === 'children') {
          if (isComplexChildren) {
            return false;
          }
          if (typeof childrenValue === 'string' && !shouldFilterChildren) {
            return false;
          }
          return !shouldFilterChildren;
        }
        return true;
      })
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : null;
        }
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        }
        return `${key}={${JSON.stringify(value)}}`;
      })
      .filter(Boolean);

    const propsString =
      propsEntries.length > 0 ? ` ${propsEntries.join(' ')}` : '';

    if (typeof childrenValue === 'string' && !shouldFilterChildren) {
      return `<${componentName}${propsString}>${childrenValue}</${componentName}>`;
    }

    if (isComplexChildren) {
      const placeholder =
        story.childrenCodePlaceholder ?? '  {/* Your content */}';
      return `<${componentName}${propsString}>\n${placeholder}\n</${componentName}>`;
    }

    return `<${componentName}${propsString} />`;
  }, [
    story.component,
    currentProps,
    story.isVoidElement,
    story.childrenCodePlaceholder,
  ]);

  const Component = story.component;

  return (
    <div className="component-doc">
      <div className="component-doc-header">
        <h2 className="component-doc-title">{story.title}</h2>
        {story.description && (
          <p className="component-doc-description">{story.description}</p>
        )}
      </div>

      {story.presets && story.presets.length > 0 && (
        <div className="component-doc-presets">
          <h4 className="component-doc-presets-title">Presets</h4>
          <div className="component-doc-presets-list">
            {story.presets.map((preset, index) => (
              <button
                key={index}
                className="component-doc-preset-button"
                onClick={() => handlePresetSelect(preset.props)}
                type="button"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`component-doc-layout ${Object.keys(story.propsConfig ?? {}).length === 0 ? 'component-doc-layout--no-props' : ''}`}
      >
        <div className="component-doc-preview">
          <h4 className="component-doc-section-title">Preview</h4>
          <div className="component-doc-preview-area">
            <Component
              {...(Object.fromEntries(
                Object.entries(currentProps as Record<string, unknown>).filter(
                  ([key]) => {
                    return (
                      !(story.isVoidElement ?? false) || key !== 'children'
                    );
                  }
                )
              ) as T)}
            />
          </div>
        </div>

        {Object.keys(story.propsConfig ?? {}).length > 0 && (
          <div className="component-doc-controls">
            <PropsControl
              props={Object.fromEntries(
                Object.entries(currentProps as Record<string, unknown>).filter(
                  ([key]) => {
                    return (
                      !(story.isVoidElement ?? false) || key !== 'children'
                    );
                  }
                )
              )}
              config={Object.fromEntries(
                Object.entries(story.propsConfig ?? {}).filter(([key]) => {
                  return !(story.isVoidElement ?? false) || key !== 'children';
                })
              )}
              onChange={handlePropsChange}
            />
          </div>
        )}
      </div>

      <div className="component-doc-code">
        <h4 className="component-doc-section-title">Code</h4>
        <CodePreview code={generateCode()} language="tsx" />
      </div>
    </div>
  );
}
