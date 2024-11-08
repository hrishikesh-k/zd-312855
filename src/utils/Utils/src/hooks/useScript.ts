import { useEffect, useState } from 'react';

type ScriptProps = {
  src: string;
  id?: string;
};
type ScriptStatus = 'loading' | 'error' | 'ready';

/**
 * The `useScript` function dynamically loads a script with the specified source URL and optional ID,
 * providing status updates on its loading progress.
 * @param {ScriptProps}  - The `useScript` function takes an object as a parameter with the following
 * properties:
 * @returns The `useScript` custom hook returns the current status of the script loading process. This
 * status can be one of the following strings: "ready" when the script has successfully loaded, or
 * "error" when there is an error loading the script. If the script has not finished loading, the
 * status will be undefined.
 */

const useScript = ({ id, src }: ScriptProps) => {
  const [status, setStatus] = useState<ScriptStatus>('loading');
  useEffect(() => {
    let script: HTMLScriptElement | null = document.body.querySelector(`script[src="${src}"]`);
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      script.setAttribute('id', id ?? '');
      script.addEventListener('load', () => setStatus('ready'), false);
      script.addEventListener(
        'error',
        () => {
          setStatus('error');
        },
        false,
      );
      document.body.appendChild(script);

      // remove script on unmount
      return () => {
        const mountedScript = document.body.querySelector(`script[src="${src}"]`);
        if (mountedScript) {
          mountedScript.remove();
        }
      };
    }
    return setStatus('ready');
  }, [id, src]);

  return status;
};

export default useScript;
