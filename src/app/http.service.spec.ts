import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { PostModel } from './post.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  beforeEach(() => {
    service = TestBed.get(HttpService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test httpClient.get', () => {
    const testPost: PostModel[] = [
      {id: 1, userId: 1, title: "Test title 1", body: "Sample body 1"},
      {id: 2, userId: 2, title: "Test title 2", body: "Sample body 2"}
    ];

    service.getPosts().subscribe((posts) => {
      expect(testPost).toBe(posts, 'should check mocked data');
    });

    const req = httpTestCtrl.expectOne(service.BASE_URL + 'posts');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);
  });

  it('should test httpClient.post', () => {
    const newPost: PostModel = {id: 1, userId: 1, title: "Test title 1", body: "Sample body 1"};

    service.addPost(newPost).subscribe((addedPost) => {
      expect(addedPost).toBe(newPost);
    });

    const req = httpTestCtrl.expectOne(service.BASE_URL+'posts');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(newPost);
  });

  it('should test 404 error', () => {
    // const errorMsg = 'mock 404 error occured';
    const errorMsg = 'Http failure response for https://jsonplaceholder.typicode.com/posts: 404 Not Found';
    service.getPosts().subscribe((data) => {
      fail('failing with error 404');
    }, (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorMsg);
    });

    const req = httpTestCtrl.expectOne(service.BASE_URL+'posts');
    req.flush(errorMsg, {status: 404, statusText: 'Not Found'});
  });
});
