import { ReplaySubject } from 'rx';

export const showNotoficationObservable = new ReplaySubject(1);

showNotoficationObservable.onNext('New notification');
