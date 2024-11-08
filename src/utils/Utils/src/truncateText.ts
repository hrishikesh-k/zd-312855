/**
 * Truncates a string of text and adds an ellipsis at the end if necessary.
 * @param {string} text - The input text to be truncated.
 * @param {number} maxLength - The maximum length of the truncated string, including the ellipsis.
 * @param {boolean} hasEllipsis - Boolean flag to add ellipsis at the end of the text(...).
 * @returns {string} The truncated text with an ellipsis if necessary.
 */
const truncateText = (text?: string, maxLength?: number, hasEllipsis: boolean = false): string => {
  if (typeof text === 'undefined') {
    return '';
  }

  if (typeof maxLength === 'undefined') {
    return text;
  }

  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}${hasEllipsis ? '...' : ''}`;
  }
  return text;
};

export default truncateText;
